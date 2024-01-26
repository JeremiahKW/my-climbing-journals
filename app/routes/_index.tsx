import SessionCard from "../components/SessionCard";
import { mockSessions } from "../data" // this will get replaced with a database??


export default function Index() {
  const sessions = mockSessions;

  return (
    <>
      <div>
        {sessions.map((session) => (
           <SessionCard session={session} />
        ))}
      </div>
    </>
  )
}