const Note = () => {
  return (
    <textarea
      // onChange={event => handleChange(event)}
      // value={text}
      placeholder="Write any exercise, tip, cases or anything you need in here. The main idea of the code which must be in here always on sight "
      className="w-full h-full max-h-full min-h-full p-2 overflow-x-hidden overflow-y-scroll text-gray-200 bg-gray-900 border-gray-300/20 focus:outline-none border-b-gray-300 heading-7"
    />
  )
}
export default Note
