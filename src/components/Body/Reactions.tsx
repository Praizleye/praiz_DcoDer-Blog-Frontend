import React from "react";
import PropTypes from "prop-types";

import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import Checkbox from "@mui/material/Checkbox";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ChatBubbleOutlinedIcon from "@mui/icons-material/ChatBubbleOutlined";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { RemoveRedEyeOutlined } from "@mui/icons-material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// type ClickProps = {
//   handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
// };

function Reactions() {
  const handleLikeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("hello", event);
  };
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing="auto"
        sx={{ mx: 4, width: "75%" }}
      >
        <div>
          <Tooltip title="Like" placement="bottom" sx={{ p: 0 }}>
            <Checkbox
              {...label}
              icon={<FavoriteBorderOutlinedIcon />}
              checkedIcon={<Favorite />}
              onClick={handleLikeClick}
            />
          </Tooltip>
          <Typography component="span" sx={{ pl: 2 }}>
            23
          </Typography>
        </div>
        <div>
          <Tooltip title="Comments" placement="bottom" sx={{ p: 0 }}>
            <Checkbox
              {...label}
              icon={<ChatBubbleOutlineOutlinedIcon />}
              checkedIcon={<ChatBubbleOutlinedIcon />}
            />
          </Tooltip>
          <Typography component="span" sx={{ pl: 2 }}>
            3
          </Typography>
        </div>
        <div>
          <Tooltip title="Views" placement="bottom" sx={{ p: 0 }}>
            <Checkbox
              {...label}
              icon={<RemoveRedEyeOutlined />}
              checkedIcon={<VisibilityOutlinedIcon />}
            />
          </Tooltip>
          <Typography component="span" sx={{ pl: 2 }}>
            53
          </Typography>
        </div>

        <div>
          <Tooltip title="Bookmark" placement="bottom" sx={{ p: 0 }}>
            <Checkbox
              {...label}
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
            />
          </Tooltip>
        </div>
      </Stack>
    </div>
  );
}

export default Reactions;
