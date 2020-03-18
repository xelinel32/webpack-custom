async function start() {
  await Promise.resolve('async is worked');
}

start().then(console.log);

class Until {
  static id = Date.now();
}

const unused = 42;

console.log('Until id:', Until.id);
