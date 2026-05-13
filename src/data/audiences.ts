export type Audience = {
  id: string;
  title: string;
  description: string;
  examples: string[];
};

export const AUDIENCES: Audience[] = [
  {
    id: "schools",
    title: "Schools",
    description: "Spirit wear, staff polos, event shirts, and class gear. We make ordering simple for everyone from the principal to the PTO.",
    examples: ["Spirit wear", "Staff uniforms", "Class shirts", "Graduation gear"],
  },
  {
    id: "sports-teams",
    title: "Sports Teams",
    description: "Uniforms, practice gear, fan apparel, and warmups built for teams that take their look seriously.",
    examples: ["Game uniforms", "Practice gear", "Fan shirts", "Warmup jackets"],
  },
  {
    id: "churches",
    title: "Churches",
    description: "Mission trip shirts, volunteer tees, youth group gear, and event apparel for congregations of every size.",
    examples: ["Mission trip shirts", "Youth group tees", "Volunteer gear", "Event apparel"],
  },
  {
    id: "businesses",
    title: "Businesses",
    description: "Branded workwear, staff uniforms, and promotional apparel that makes your team look like a team.",
    examples: ["Staff uniforms", "Branded polos", "Company swag", "Promotional tees"],
  },
  {
    id: "camps",
    title: "Camps",
    description: "Staff shirts, camper tees, and group gear for camps that need the right look on a real deadline.",
    examples: ["Staff shirts", "Camper tees", "Program gear", "Seasonal orders"],
  },
  {
    id: "community-groups",
    title: "Community Groups",
    description: "Clubs, nonprofits, neighborhood associations, and local organizations. Custom apparel for any cause worth wearing.",
    examples: ["Nonprofit gear", "Club apparel", "Fundraiser shirts", "Awareness gear"],
  },
];
