import { ToolbarItem } from "components/editor";
import { ToolbarSection } from "../../editor/Toolbar/ToolbarSection";

const CommonSettings = () => (
  <>
    <ToolbarSection
      title="Margin"
      props={["margin"]}
      summary={({ margin }) => {
        return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
          margin[3] || 0
        }px`;
      }}
    >
      <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
      <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
      <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
      <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
    </ToolbarSection>

    <ToolbarSection
      title="Width"
      props={["width"]}
      summary={({ width }) => `${width || 0}%`}
    >
      <ToolbarItem propKey="width" type="slider" label="Width" />
    </ToolbarSection>
  </>
);

export default CommonSettings;
