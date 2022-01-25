import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morsePipe'
})
export class MorsePipePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    value = value.toUpperCase();
    let result: string = "";



    for (let i = 0; i < value.length; i++) {
      let char: string = value.charAt(i);
      result += this.CharToMorse(char) + " ";
    }

    return result;
  }

  CharToMorse(char: string) : string {
    let result: string = "error";
    switch (char) { 
      case 'A':
        result = ".-";
        break;
      case 'B':
        result = "-...";
        break;
      case 'C':
        result = "-.-.";
        break;
      case 'D':
        result = "-..";
        break;
      case 'E':
        result = ".";
        break;
      case 'F':
        result = "..-.";
        break;
      case 'G':
        result = "--.";
        break;
      case 'H':
        result = "....";
        break;
      case 'I':
        result = "..";
        break;
      case 'J':
        result = ".---";
        break;
      case 'K':
        result = "-.-";
        break;
      case 'L':
        result = ".-..";
        break;
      case 'N':
        result = "-.";
        break;
      case 'M':
        result = "--";
        break;
      case 'O':
        result = "---";
        break;
      case 'P':
        result = ".--.";
        break;
      case 'Q':
        result = "--.-";
        break;
      case 'R':
        result = ".-.";
        break;
      case 'S':
        result = "...";
        break;
      case 'T':
        result = "-";
        break;
      case 'U':
        result = "..-";
        break;
      case 'V':
        result = "...-";
        break;
      case 'W':
        result = ".--";
        break;
      case 'X':
        result = "-..-";
        break;
      case 'Y':
        result = "-.--";
        break;
      case 'Z':
        result = "--..";
        break;
      case 'Æ':
        result = ".-.-";
        break;
      case 'Ø':
        result = "---.";
        break;
      case 'Å':
        result = ".--.-";
        break;
      case '1':
        result = ".----";
        break;
      case '2':
        result = "..---";
        break;
      case '3':
        result = "...--";
        break;
      case '4':
        result = "....-";
        break;
      case '5':
        result = ".....";
        break;
      case '6':
        result = "-....";
        break;
      case '7':
        result = "--...";
        break;
      case '8':
        result = "---..";
        break;
      case '9':
        result = "----.";
        break;
      case '0':
        result = "-----";
        break;
      case '.':
        result = ".-.-.-";
        break;
      case ',':
        result = "--..--";
        break;
      case ':':
        result = "---...";
        break;
      case '?':
        result = "..--..";
        break;
      case '\'':
        result = ".----.";
        break;
      case '-':
        result = "-....-";
        break;
      case '/':
        result = "-..-.";
        break;
      case '(':
        result = "-.--.";
        break;
      case ')':
        result = "-.--.-";
        break;
      case '"':
        result = ".-..-.";
        break;
      case ' ':
        result = "|";
        break;
      case '*':
        result = "-..-";
        break;
      case '@':
        result = ".--.-.";
        break;
      default:
        result = "";
        break;
    }
    return result;
  }
}
