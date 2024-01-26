export default function RouteCard({ route }) {
  return (
    <>
      <div className="flex">
        {route.name} / {route.notes?.myGrade}
      </div>
    </>
  )
}