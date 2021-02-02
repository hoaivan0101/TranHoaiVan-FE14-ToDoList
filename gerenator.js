function* test1() {
    yield 'Generator1';
    return 'Finish'
}

const result = test1();
console.log(result.next());