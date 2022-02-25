
<div class="taillebody">
    <div style="text-align: center;">
        <FORM action="assets/include/score.php" method="post">

            <div class="">
                <label for="exampleInputEmail1">Nom</label><br>
                <input type="text" class="" placeholder="Entrez nom en majuscules" name="Nom" required>
        </div>
        <div class="">
                <label for="exampleInputEmail1">Prenom</label><br>
                <input type="text" class="" placeholder="Entrez prénom" name="Prenom" required>
        </div>
            <div class="">
                <label for="exampleInputEmail1">Adresse Mail</label><br>
                <input id="mail1" type="email" class="" placeholder="Entrez email" onchange="DoubleCheck()" name="Mail" required>
        </div>
        <div class="">
            <label for="exampleInputEmail1">Votre date de naissance</label><br>
            <input id="date" type="date" class="" name="Date" required>
        </div>
            <div class="">
                <label for="exampleInputEmail1">Téléphone(optionnel)</label><br>
                <input type="tel" class="" placeholder="Entrez numéro de téléphone , Il sera utilsé pour des besoins urgents (stage, document manquant, etc)" name="Tel">
        </div>
        <div class="">
            <input type="checkbox" class="" id="exampleCheck1" required>
            <label class="" for="exampleCheck1">J'ai pris connaissance de mes droits d'accès de rectification et de suppression de mes données à caractère personnel</label><br>
        </div>
            <input type="Submit" value="S'enregister" id="submit" >
        </FORM>
        </div>
</div>
        