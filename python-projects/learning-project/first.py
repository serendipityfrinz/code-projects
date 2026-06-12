import time

while True:
    print("// Calculator //")
    num1 = int(input("First number: "))
    time.sleep(0.5)
    num2 = int(input("Second number: "))
    time.sleep(0.5)

    print("\n1 - Addition\n2 - Subtraction\n3 - Multiplication\n4 - Division")
    operator = input("Operator: ")

    match operator:
        case "1":
            print("The answer is:", num1 + num2)
        case "2":
            print("The answer is:", num1 - num2)
        case "3":
            print("The answer is:", num1 * num2)
        case "4":
            print("The answer is:", num1 / num2)
        case _:
            print("You are not slick, try again")
            pass

    c = input("Use again? [y]es/[n]o: ").lower().strip()

    if (c == "n" or c == "no"):
        print("Thank you for using the Calculator😆")
        break
