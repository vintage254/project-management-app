export default function ApplicationLogo(props) {
    return (
        <svg {...props} viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
            {/* Logo symbol */}
            <rect x="10" y="30" width="20" height="40" fill="#00CED1" />
            <rect x="35" y="30" width="20" height="40" fill="#8A2BE2" />
            <rect x="60" y="30" width="20" height="40" fill="#FF69B4" />
            
            {/* Text */}
            <text x="95" y="62" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="bold" fill="#FFFFFF">SyncraftSpace</text>
        </svg>
    );
}