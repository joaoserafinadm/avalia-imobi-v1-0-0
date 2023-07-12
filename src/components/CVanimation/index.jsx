
import style from './index.module.css'

export default function CVanimation(props) {



    return (
        <div>
            <div class={`${style.wrapper_C}`}>
                <svg className={`${style.svg}`}>
                    <text className={`${style.text}`} x="50%" y="50%" dy=".35em" text-anchor="middle">
                        C
                    </text>
                </svg>
            </div>
            <div class={`${style.wrapper_V}`}>
                <svg className={`${style.svg}`}>
                    <text className={`${style.text}`} x="50%" y="50%" dy=".35em" text-anchor="middle">
                        V
                    </text>
                </svg>
            </div>
        </div>
    )
}