import RouteCard from "./RouteCard";

export default function SessionCard({ session }) {
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