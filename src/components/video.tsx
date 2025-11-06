import YouTube from "react-youtube";

type Id = {
    IdVideo:string
}



export function RenderVideos({IdVideo}:Id){
    return (
        <YouTube videoId = {IdVideo} />
    )
}
    
