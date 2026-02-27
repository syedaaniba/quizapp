function MyInfo () {
    const name="Aniba"
    const age = 22
    const animals = ["cat", "hamster"]
    const bsfs = ["bisma","muskan","rehman"]
   const food = ["shawarma","momos","pizza"]
   const sem = 6;
   const pets = [
  { name: "Dog", fact: "Dogs have three eyelids!" },
  { name: "Cat", fact: "Cats rotate ears 180°!" }
];

   function displayFood () {
    alert(food[0])
   }
    return (
        <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        <h3>2+2={2+2}</h3>
        <h4>Animal i like 
            <ul>
                {animals.map((ani) =><li>{ani}</li> )}
            </ul>
        </h4>
        <h5>my bestfriends
            <ul>
                {bsfs.map((friend) => <li> {friend} </li> )}
            </ul>
        </h5>
        {sem === 8 ? 
        <h6>damn youre a 8th sem student</h6> : 
        <p>"you gotta wait now to graduate"</p>
        }
        <button onClick={displayFood}>click me </button>

        <h4>pet house</h4>
        {pets.map((pet) => {
            return (
            <div key={pet.name}>
                <h2>{pet.name}</h2>
                <h3>{pet.fact}</h3>
            </div>
            )
        })}
        </div>
    )
}

export  default MyInfo;