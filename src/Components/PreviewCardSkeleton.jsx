const PreviewCardSkeleton = () => {
  return (
    <div className="border p-2 w-full h-[60vh] rounded-md bg-zinc-800 animate-pulse flex flex-col gap-2">


      <div className="h-[50vh] bg-zinc-700 rounded-md"></div>

     
      <div className="h-4 bg-zinc-700 w-1/2 rounded"></div>
      <div className="h-4 bg-zinc-700 w-1/3 rounded"></div>

     
      <div className="flex gap-2">
        <div className="h-8 w-20 bg-zinc-700 rounded"></div>
        <div className="h-8 w-20 bg-zinc-700 rounded"></div>
      </div>

    </div>
  );
};
export default PreviewCardSkeleton