import RouteCard from "./RouteCard";

export default function Session({ session }) {
  return (
    <>
        <div>
          {session.id}
          {session.routes.map((route) => (
            <RouteCard route={route} />
          ))}
        </div>
    </>
  )
}