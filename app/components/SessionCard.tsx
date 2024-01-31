import RouteCard from "./RouteCard";

export default function SessionCard({ session }) {
  return (
    <>
      <div>
        <h1>Routes completed this session:</h1>
        {session.id}
        {session.routes.map((route) => (
          <div key={route.id}>
            <RouteCard route={route} />
          </div>
        ))}
      </div>
      {session.notes.images ? <div style={{ maxHeight: "25px" }}><img src={`assets/images/${session.notes.images.url}`} /></div> : ''}

      <div>
        <h3>List of sends this sesson:</h3>
        {session.routes.some(route => route.send) ? (
          session.routes.map(route => route.send && <div key={route.id}>{route.name}</div>)
        ) : (
          <div>No sends, you suck</div>
        )}
        
      </div>
    </>
  )
}