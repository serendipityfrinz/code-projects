#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
	system("clear");
	int i, j;

	for(i = 1; i <= 5; i++) {
	for(j = 1; j <= 5; j++) {

	if ( 
	(i == 1 && j == 3) || 
	(i == 2 && (j == 2 || j == 3 || j == 4)) ||
	(i == 3 && (j == 1 || j == 2 || j == 3 || j == 4 || j == 5)) ||
	(i == 4 && (j == 2 || j == 3 || j == 4)) ||
	(i == 5 && (j == 3))
	)
	{
		cout << "0";
	}
	else{
		cout << " ";
	}
	}
	cout << endl;
	}
	
	cin.get();
    return 0;
}
