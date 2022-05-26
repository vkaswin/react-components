import React from "react";
import { Button } from "components";
import { toast } from "utils";

import "./Toast.scss";

const ToastPage = () => {
  const toasts = [
    {
      label: "Top Left",
      type: "success",
      position: "top-left",
    },
    {
      label: "Top Center",
      type: "error",
      position: "top-center",
    },
    {
      label: "Top Right",
      type: "info",
      position: "top-right",
    },
    {
      label: "Bottom Left",
      type: "warning",
      position: "bottom-left",
    },
    {
      label: "Bottom Center",
      type: "success",
      position: "bottom-center",
    },
    {
      label: "Bottom Right",
      type: "error",
      position: "bottom-right",
    },
  ];
  return (
    <div className="toast-wrapper">
      <div className="toast-btn">
        {toasts.map(
          (
            {
              label,
              type,
              message = "Loreum ispum loreum ispum loreum ispum",
              position,
            },
            index
          ) => {
            return (
              <Button
                key={index}
                label={label}
                className="btn btn-outline-secondary"
                onClick={() =>
                  toast({
                    type,
                    message,
                    position,
                  })
                }
              />
            );
          }
        )}

        <Button
          label="Top Center"
          className="btn btn-outline-secondary"
          onClick={() =>
            toast({
              type: "error",
              message: "Loreum ispum loreum ispum loreum ispum",
              position: "top-center",
            })
          }
        />
      </div>
      <div className="toast-btn">
        <Button
          label="Success"
          className="btn btn-success"
          onClick={() =>
            toast({
              type: "success",
              message: "Loreum ispum loreum ispum loreum ispum",
            })
          }
        />
        <Button
          label="Error"
          className="btn btn-danger"
          onClick={() =>
            toast({
              type: "error",
              message: "Loreum ispum loreum ispum loreum ispum",
            })
          }
        />
        <Button
          label="Warning"
          className="btn btn-warning"
          onClick={() =>
            toast({
              type: "warning",
              message: "Loreum ispum loreum ispum loreum ispum",
            })
          }
        />
        <Button
          label="Info"
          className="btn btn-info"
          onClick={() =>
            toast({
              type: "info",
              message: "Loreum ispum loreum ispum loreum ispum",
            })
          }
        />
      </div>
    </div>
  );
};

export default ToastPage;
