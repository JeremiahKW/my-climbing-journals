import RouteCard from "../components/RouteCard";
import Session from "../components/Sessions";
import { mockSessions } from "../data"


export default function Index() {
  const sessions = mockSessions;

  return (
    <>
      <div>
        {sessions.map((session) => (
           <Session session={session} />
        ))}
      </div>
    </>
  )
}