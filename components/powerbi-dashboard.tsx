import React from "react";
import dynamic from "next/dynamic";
import { EmbedProps } from "powerbi-client-react";
const PowerBIEmbed = dynamic<EmbedProps>(
  () => import("powerbi-client-react").then((m) => m.PowerBIEmbed),
  { ssr: false }
);
import { models } from "powerbi-client";

const PowerbiDashboard = () => {
  return (
    <>
      {typeof window !== undefined ? (
        <PowerBIEmbed
          embedConfig={{
            type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: "47197e99-797e-4d1a-a33d-6ab9d591498e",
            embedUrl: process.env.NEXT_PUBLIC_EMBEDURL,
            accessToken: process.env.NEXT_PUBLIC_ACCESSTOKEN,
            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false,
                },
              },
              background: models.BackgroundType.Transparent,
              customLayout: {
                displayOption: models.DisplayOption.FitToPage,
              },
            },
          }}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event?.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
          cssClassName={"reportClass "}
          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default PowerbiDashboard;
