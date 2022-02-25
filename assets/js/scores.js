var valuetableauscores = 0;
const categories = [
{
  name: "PVP",
  items: ["Arsenal", "Chelsea", "Liverpool", "Man City", "Man United", "Tottenham", "Real Madrid", "Barcelona", "Atletico Madrid", "Bayern Munich", "Borussia Dortmund", "Juventus", "Paris Saint Germain", "AC Milan", "Inter Milan", "Ajax"] },

{
  name: "construction",
  items: ["The Beatles", "The Rolling Stones", "The Kinks", "The Who", "Queen", "Led Zeppelin", "The Clash", "The Jam", "New Order", "Oasis", "Blur", "Muse", "Arctic Monkeys", "The Cure", "Black Sabbath", "Radiohead"] },

{
  name: "disco dance",
  items: ["disco dance", "The Rolling Stones", "The Kinks", "The Who", "Queen", "Led Zeppelin", "The Clash", "The Jam", "New Order", "Oasis", "Blur", "Muse", "Arctic Monkeys", "The Cure", "Black Sabbath", "Radiohead"] },

{
  name: "Bedwars",
  items: ["Bedwars", "Bedwars1", "The Kinks", "The Who", "Queen", "Led Zeppelin", "The Clash", "The Jam", "New Order", "Oasis", "Blur", "Muse", "Arctic Monkeys", "The Cure", "Black Sabbath", "Radiohead"] },

{
  name: "spleef",
  items: ["Washington", "Jefferson", "Lincoln", "T. Roosevelt", "F.D. Roosevelt", "Kennedy", "Nixon", "Clinton", "Reagan", "G.W. Bush", "Obama", "Wilson", "Trump", "Truman", "Carter", "Eisenhower"] }];



const blankRound = [
['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', ''],
['', '']];


function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: categories,
      round: blankRound.map(arr => arr.slice()),
      champion: '' };

    this.onSelect = this.onSelect.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
  }
  componentWillMount() {
    let round = [...this.state.round];
    round[0] = shuffle(this.state.categories[0].items);
    this.setState({
      round: round });

  }

  changeCategory(event) {
    let round = [...blankRound];
    round[0] = shuffle(this.state.categories[event.target.value].items);
    valuetableauscores = event.target.value;
    console.log(valuetableauscores);
   // updateTableauScore();
    this.setState({
      champion: '',
      round: round });

  }

  onSelect(item, index, roundIndex) {
    let champion = this.state.champion;
    let round = [...this.state.round];
    if (roundIndex === 3) {
      champion = item;
    } else {
      round[roundIndex + 1][index] = item;
      if (roundIndex === 0) {
        round[2][Math.floor(index / 2)] = "";
        round[3][Math.floor(index / 4)] = "";
        champion = "";
      }
      if (roundIndex === 1) {
        round[3][Math.floor(index / 2)] = "";
        champion = "";
      }
      if (roundIndex === 2) {
        champion = "";
      }
    }
    this.setState({
      round: round,
      champion: champion });

  }

  render() {
    const list = this.state.round.map((round, i) => {
      return round.map((el, j) => {
        let checked = i !== 3 ? this.state.round[i + 1][Math.floor(j / 2)] : this.state.champion;
        return /*#__PURE__*/React.createElement(Match, { roundIndex: i, data: el, checked: checked, index: Math.floor(j / 2), onSelect: this.onSelect });
      });
    });
    const rounds = list.map((el, i) => {
      const key = 'round' + i;
      return /*#__PURE__*/React.createElement(Round, { key: key, data: el, round: i, champion: this.state.champion });
    });

    const options = this.state.categories.map((el, i) => {
      return /*#__PURE__*/React.createElement("option", { value: i }, el.name);
    });

    return /*#__PURE__*/(
      React.createElement("div", { className: "app" }, /*#__PURE__*/
      React.createElement("header", null, /*#__PURE__*/
      React.createElement("h1", { className: "title" }, "Scores des tournois")), /*#__PURE__*/

      React.createElement("div", { className: "category-selection" }, /*#__PURE__*/
      React.createElement("div", null, "Choose Category: "), /*#__PURE__*/
      React.createElement("select", { onChange: this.changeCategory },
      options)), /*#__PURE__*/


      React.createElement("div", { className: "knockout-container" },
      rounds)));



  }}


class Match extends React.Component {
  render() {
    let checked = this.props.checked === this.props.data && this.props.data !== "";
    return /*#__PURE__*/(
      React.createElement("div", { className: "knockout-match bracket-team" }, /*#__PURE__*/
      React.createElement("div", { className: "team-name" }, /*#__PURE__*/
      React.createElement("div", null, this.props.data)), /*#__PURE__*/

      React.createElement("div", { className: "team-radio" },
      this.props.data ? /*#__PURE__*/React.createElement("input", { type: "radio", checked: checked,
        onChange: () => this.props.onSelect(this.props.data, this.props.index, this.props.roundIndex) }) :
      '')));



  }}


class Round extends React.Component {
  render() {
    const champions = this.props.champion && this.props.round === 3 ? /*#__PURE__*/React.createElement("div", { className: "champions-container" }, /*#__PURE__*/
    React.createElement("div", { className: "champions-data" }, /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/React.createElement("i", { className: "fas fa-trophy" })), /*#__PURE__*/
    React.createElement("div", { className: "champions-team" }, this.props.champion))) :

    '';
    return /*#__PURE__*/(
      React.createElement("div", { className: "knockout-stage" }, /*#__PURE__*/
      React.createElement("h2", null), /*#__PURE__*/
      React.createElement("div", { className: 'knockout-round-container bracket-' + (this.props.round + 1) },
      champions,
      this.props.data)));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));