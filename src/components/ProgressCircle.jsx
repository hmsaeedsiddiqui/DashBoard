import { Box, useTheme } from "@mui/material";
import { token } from "../theme";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
    const theme = useTheme();
    const colors = token(theme.palette.mode); // Fixed the typo here
    const angle = parseFloat(progress) * 360; // Ensure progress is treated as a number

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                    conic-gradient(transparent 0deg ${angle}deg, ${colors.blueAccent[500]} ${angle}deg 360deg),
                    ${colors.greenAccent[500]}`,
                borderRadius: "50%",
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
        </Box>
    );
}

export default ProgressCircle;
