import { SpinnerSM } from "../components/loading/Spinners";




export default function Loading() {

    return (
        <div className="text-secondary" style={{ position: "absolute", bottom: '1px', right: "1px", opacity: 0.5, scale: '0.8' }}>
            <SpinnerSM />
        </div>
    )


}