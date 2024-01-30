import  pg  from 'pg'
//Esta es una mala practica que estoy realizando al subir el repositorio pero como es una instancia que cree en la nube para este proyecto decidí subir al repositorio este url
const conString = "postgres://euwfncgk:szWuJ0wYfeTAy6jWauSzVBStu3nWUgEj@kashin.db.elephantsql.com/euwfncgk" ;
const client = new pg.Client(conString);
await client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
  });
});

export default client;