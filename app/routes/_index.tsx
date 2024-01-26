import RouteCard from "../components/RouteCard";
import { mockSessions } from "../data"


export default function Index() {
  const routes = mockSessions[0].routes;

  return (
    <>
      <div>
        {routes.map((route) => (
          <RouteCard  route={route} />
        ))}
      </div>
    </>
  )
}