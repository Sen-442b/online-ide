const stubs = {};
stubs.cpp = `#include <iostream>
#include <studio.h>
using namespace std;
int main() {
    cout<<"Hello world!\\n";
    return 0;
}
`;

stubs.py = `print("Hello world!")`;

export default stubs;