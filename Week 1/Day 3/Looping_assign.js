
//  program that reads a student's score and displays their grade using a switch statement.

// Grade Calculation using Switch Statement

let Score=55

switch(true)
{
    case (Score>=90):
    console.log("Grade A")
    break

    case(Score>=80 && Score<=89):
    console.log("Grade B")
    break

    case(Score>=70 && Score<=79):
    console.log("Grade C")
    break

    case(Score>=60 && Score<=69):
    console.log("Grade D")
    break

    default:
    console.log("Grade F")
}