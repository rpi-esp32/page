/* from callback to promise-based */
function getPosition(options?: PositionOptions): Promise<Position> {
    return new Promise((resolve, reject) => 
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
}

/*  into promise */
getPosition(options)
  .then((position) => {
    console.log(position);
  })
  .catch((err) => {
    console.error(err.message);
  });

/*  async await  */
try {
    const position = await getPosition(options);
    console.log(position);
} catch (err) {
    console.error(err.message);
}