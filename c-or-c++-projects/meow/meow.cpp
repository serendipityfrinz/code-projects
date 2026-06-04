#include <iostream>
using namespace std;

int main() {
  int subjects = 0;
  int addg = 0;
  int genave = 0;

  cout << "//--GENERAL AVERAGE CALCULATOR--//\n";

  cout << "How many subjects? ";
  cin >> subjects;
  int grade[subjects];

  for (int i = 0; i < subjects; i++) {
    cout << "Grade of subject #" << i + 1 << ": ";
    cin >> grade[i];
    addg += grade[i];
  }

  genave = addg / subjects;
  cout << "Your general average is: " << genave;

  if (genave >= 98 && genave <= 100) {
    cout << "\nWith Highest Honors (Wow galing mo naman)";
  } else if (genave >= 95 && genave <= 97) {
    cout << "\nWith High Honors";
  } else if (genave >= 90 && genave <= 94) {
    cout << "\nWith Honors";
  } else if (genave >= 75 && genave <= 89) {
    cout << "\nNot With Honors (Mag aral ka mabuti)";
  } else {
    cout << "\nFailed (Wala kana magagawa sah😭)";
  }

  return 0;
}
