export default function Menu() {
  return (
    <div className="py-2 menucontainer">
      <div className="flex flex-col sm:grid grid-cols-2">
        <div className="h-1/2 w-full menu-one"></div>
        <div className="h-1/2 w-full menu-two"></div>
      </div>
    </div>
  );
}
