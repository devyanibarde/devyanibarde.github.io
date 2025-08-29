export interface MainContentProps {
    selectedNav: string;
}

export interface NavPanelProps {
    selectedNav: string;
    setSelectedNav: (nav: string) => void;
}

export interface StoryItemProps {
    icon: React.ElementType;
    name: string;
    record: any;
}