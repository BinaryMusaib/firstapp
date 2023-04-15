import ReactPlayer from "react-player";

export default function MyVideo() {
    return (
        <div>
            <ReactPlayer url = "https://www.youtube.com/watch?v=ysz5S6PUM-U" 
            height={200} 
            width = {400}
        />
        </div>
        
    );
}