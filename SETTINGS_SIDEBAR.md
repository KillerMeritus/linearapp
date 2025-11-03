# Settings Sidebar Navigation

This document outlines the comprehensive settings sidebar navigation structure that has been implemented.

## Structure Overview

The settings sidebar follows this exact hierarchy as shown in the design:

### 1. Account Section
- **Preferences** - User interface and behavior preferences
- **Profile** - User profile settings
- **Notifications** - Notification preferences
- **Security & access** - Security and access controls
- **Connected accounts** - Connected third-party accounts

### 2. Issues Section
- **Labels** - Issue labels management
- **Templates** - Issue templates
- **SLAs** - Service level agreements for issues

### 3. Projects Section
- **Labels** - Project labels
- **Templates** - Project templates
- **Statuses** - Project status management
- **Updates** - Project update settings

### 4. Features Section
- **Initiatives** - Strategic initiatives management
- **Documents** - Documentation features
- **Customer requests** - Customer request tracking
- **Pulse** - Activity pulse features
- **AI** - AI-powered features
- **Agents** - Automated agents
- **Asks** - Internal asks/requests
- **Emojis** - Custom emoji management
- **Integrations** - Third-party integrations

### 5. Administration Section
- **Workspace** - Workspace-level settings
- **Teams** - Team management
- **Members** - Member management
- **Security** - Security settings
- **API** - API access and keys
- **Applications** - Installed applications
- **Billing** - Billing and subscription
- **Import / Export** - Data import/export

### 6. Your Teams Section
- Dynamic list of user's teams
- Create team button

## Files Created/Modified

### New Navigation Components
- `components/layout/sidebar/nav-settings-issues.tsx`
- `components/layout/sidebar/nav-settings-projects.tsx`
- `components/layout/sidebar/nav-settings-features.tsx`
- `components/layout/sidebar/nav-settings-administration.tsx`

### Modified Files
- `data/side-bar-nav.ts` - Added new navigation data structures
- `components/layout/sidebar/app-sidebar.tsx` - Updated to include all new sections
- `components/common/settings/theme-section.tsx` - Fixed infinite loop bug

### Data Structure
All navigation items are exported from `data/side-bar-nav.ts`:
- `accountSettingsItems` - Account section items
- `settingsIssuesItems` - Issues section items
- `settingsProjectsItems` - Projects section items
- `settingsFeaturesItems` - Features section items
- `settingsAdministrationItems` - Administration section items

## Usage

The settings sidebar is automatically displayed when navigating to any `/settings` route. The sidebar will show all sections with proper icons and active state highlighting.

## Implementation Notes

1. All sections follow the same pattern using Shadcn UI sidebar components
2. Icons are from Lucide React
3. Active state is determined by matching the current pathname
4. The order of sections exactly matches the design specification
5. Each section is a separate component for better maintainability

## Next Steps

To add content for each settings page:
1. Create page files under `app/[orgId]/settings/[section]/[item]/page.tsx`
2. Each page should use the MainLayout with the settings header
3. Content components should be created in `components/common/settings/`
