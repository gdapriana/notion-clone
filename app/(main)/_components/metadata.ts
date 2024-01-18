import {
  PlusCircle,
  Search,
  Settings,
} from "lucide-react"

const metadata = {
  app: process.env.NEXT_PUBLIC_APP,
  tools: {
    settings: {
      label: "Settings",
      tooltip: `Configure your ${process.env.NEXT_PUBLIC_APP}`,
      icon: Settings
    },
    search: {
      label: "Search",
      tooltip: 'Search anything, everything in one spot',
      icon: Search
    },
    newPage: {
      label: "New Page",
      tooltip: `Create new page in your ${process.env.NEXT_PUBLIC_APP}`,
      icon: PlusCircle
    }
  },
  toast: {
    createPage: {
      loading: "Create page in progress...",
      success: "Create page success",
      error: "Create page failed"
    }
  }
}

export default metadata
