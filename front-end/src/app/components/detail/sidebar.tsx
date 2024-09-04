import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { mainMenu } from "@/app/data";
import { useRouter } from "next/navigation";
import ReorderRoundedIcon from "@mui/icons-material/ReorderRounded";
export default function SideBar() {
  const [isRightOpen, setIsRightOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const router = useRouter();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setIsRightOpen(open);
    };
  const handleRouter = (index: number) => {
    switch (index) {
      case 0:
        router.push("./");
        break;
      case 1:
        router.push("./aboutus");
        break;
      case 2:
        router.push("./news");
        break;
      case 3:
        router.push("./organiztion");
        break;
      case 4:
        router.push("./travel");
        break;
      case 5:
        router.push("./eventt");
        break;
      case 6:
        router.push("./law");
        break;
      case 7:
        router.push("./gift");
        break;
      case 8: // Corrected index for 'projectt'
        router.push("./projectt");
        break;
      case 9:
        router.push("./foreignrelations");
        break;
      default:
        break;
    }
  };

  const list = () => (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#ff7119",
        color: "white",
        height: "100vh",
        position: "relative", // Added for overlay effect
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mainMenu.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleRouter(index);
              }}
              sx={{
                ml: "10px",
                "&:hover": {
                 border:"1px solid white",
                },
              }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
        
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <ReorderRoundedIcon sx={{color:"white"}}/>
      </Button>

      <Drawer
        anchor="right"
        open={isRightOpen}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: "80vw",
          },
        }}
      >
        {list()}
      </Drawer>
    </div>
  );
}
