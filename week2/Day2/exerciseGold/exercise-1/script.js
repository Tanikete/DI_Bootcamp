let UserLanguage = prompt("which language they speak.");

UserLanguage = UserLanguage.toLowerCase();

switch (UserLanguage) {
    case "french":
        alert("Bonjour");
        break;
        case "english":
            alert("Hello");
            break;
            case "hebrew":
            alert("Shalom");
            break;
            default:
                alert("01110011 01101111 01110010 01110010 01111001");
                break;

}