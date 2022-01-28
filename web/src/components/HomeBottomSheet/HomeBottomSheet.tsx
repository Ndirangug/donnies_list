import UsersCell from 'src/components/UsersCell/UsersCell'

const HomeBottomSheet = () => {
  return (
    <div className="bottom-sheet flex justify-center items-center flex-col">
      <h1>Available Users</h1>

      <UsersCell />
    </div>
  )
}

export default HomeBottomSheet
