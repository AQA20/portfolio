const VideoPlayer = ({ src }: { src: string }) => {
  return (
    <div className="flex w-full h-[550px] overflow-hidden rounded-lg bg-black">
      <video controls src={src}  />
    </div>
  )
}


export default VideoPlayer