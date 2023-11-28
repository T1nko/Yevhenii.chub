function makeCounter() {
  let c = 0;
  return {
    set(val) {
      c = val;
    },
    get() {
      console.log(c);
    },
    reset() {
      c = 0;
    },
    next() {
      c++;
    },
  };
}

const c1 = makeCounter();
const c2 = makeCounter();

c1.next();
c1.next();
c1.next();
c1.next();

c1.get();

c1.reset();
c1.get();

c1.set(100);
c1.next();
c1.get();
