const receivesAFunction = callback => callback();

function runFiveMiles() {
    console.log("Go for a five-mile run");
  }
  function liftWeights() {
    console.log("Pump iron");
  }

const returnsANamedFunction = () => {
    const runFiveMiles = () => "run for 5 miles!"
    return runFiveMiles;
}

const returnsAnAnonymousFunction = () => (function () {
    console.log("Enjoy your coffee");
  });