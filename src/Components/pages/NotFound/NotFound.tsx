import notFoundImage from "../../../assets/not_found.png";

export function NotFound() {
  return (
    <div className="p-2">
      <img
        src={notFoundImage}
        className="w-150"
      />
      <span className="text-xl">This page is not available.</span>
    </div>
  );
}
