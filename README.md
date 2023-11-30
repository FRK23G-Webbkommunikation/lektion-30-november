# Lektion 30 november

## Övningar

Baserat på kodexemplet i `rock-paper-scissors` så lägg till funktionalitet så att du kollar om det användarnamn man matat in i inputfältet redan finns i databasen. Om användarnamnet finns så ska du uppdatera det dokumentet (`updateDoc`) med resultatet från spelet annars så ska du skapa nytt i databasen (`addDoc`).

**Swing notes med Firebase (tills tisdag)**

Ta din kod eller mitt kodexempel i denna mapp (`swing-notes`) och istället för att använda API:et med fetch så skapa en firebase databas och modifiera koden så du använder firebase istället och spara anteckningar där. Följande funktionalitet ska finnas med:

* Hämta anteckningar
* Skapa nya anteckning
* Uppdatera anteckning (vad man ska få uppdatera får du själv välja)
* Ta bort en anteckning 

Anteckningarna ska kunna kopplas till ett användarnamn.