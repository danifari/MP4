import './MP4Logo.css'

const MP4_LOGO_PATH = [
    'M 224.0,94.5 L 7.0,94.5 L 7.0,83.5 L 213.0,83.5 L 213.5,73.0 L 202.0,72.5 L 200.0,80.5 L 177.0,80.5 L 175.0,72.5 L 134.0,72.5 L 133.0,66.5 L 111.0,66.5 L 110.0,80.5 L 84.0,80.5 L 83.0,56.5 L 69.0,80.5 L 48.0,80.5 L 34.0,55.5 L 33.0,80.5 L 7.0,80.5 L 6.5,34.0 L 43.0,32.5 L 59.0,61.5 L 75.0,32.5 L 140.0,32.5 L 152.0,34.5 L 160.0,39.5 L 171.0,32.5 L 200.0,32.5 L 201.5,61.0 L 224.5,63.0 L 224.0,94.5 Z',
    'M 132.5,54.0 L 137.5,50.0 L 135.0,45.5 L 110.5,46.0 L 111.0,54.5 L 132.5,54.0 Z',
    'M 175.5,62.0 L 176.0,46.5 L 157.5,61.0 L 175.5,62.0 Z',
].join(' ')

export default function MP4Logo({ className = '' }) {
    return (
        <svg
            viewBox="0 0 234 113"
            xmlns="http://www.w3.org/2000/svg"
            className={`mp4-logo ${className}`.trim()}
            aria-hidden="true"
        >
            <path
                className="mp4-logo__mark"
                fillRule="evenodd"
                d={MP4_LOGO_PATH}
            />
        </svg>
    )
}
