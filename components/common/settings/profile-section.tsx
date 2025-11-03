'use client';

import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { useCurrentUserStore } from '@/store/current-user-store';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import { User as UserType } from '@/data/users';

export function ProfileSection() {
   const { currentUser, setCurrentUser } = useCurrentUserStore();
   const [isEditingEmail, setIsEditingEmail] = useState(false);
   const [isEditingName, setIsEditingName] = useState(false);
   const [isEditingUsername, setIsEditingUsername] = useState(false);
   const [formData, setFormData] = useState<Partial<UserType>>({
      name: currentUser.name,
      email: currentUser.email,
      username: currentUser.username || currentUser.id,
   });

   const handleSave = (field: 'email' | 'name' | 'username') => {
      try {
         setCurrentUser({
            ...currentUser,
            ...formData,
         } as UserType);
         if (field === 'email') setIsEditingEmail(false);
         if (field === 'name') setIsEditingName(false);
         if (field === 'username') setIsEditingUsername(false);
         toast.success('Profile updated', {
            description: 'Your profile has been updated successfully.',
         });
      } catch (error) {
         toast.error('Error', {
            description: 'Failed to update profile. Please try again.',
         });
      }
   };

   const handleCancel = (field: 'email' | 'name' | 'username') => {
      setFormData({
         ...formData,
         [field]: field === 'email' ? currentUser.email : field === 'name' ? currentUser.name : currentUser.username || currentUser.id,
      });
      if (field === 'email') setIsEditingEmail(false);
      if (field === 'name') setIsEditingName(false);
      if (field === 'username') setIsEditingUsername(false);
   };

   const getInitials = (name: string) => {
      return name
         .split(' ')
         .map((n) => n[0])
         .join('')
         .toUpperCase()
         .slice(0, 2);
   };

   return (
      <div className="space-y-8">
         {/* Profile Section */}
         <div>
            <h3 className="text-base font-semibold mb-6">Profile</h3>
            <div className="space-y-6">
               {/* Profile Picture */}
               <div className="flex items-center justify-between">
                  <Label htmlFor="profile-picture" className="text-sm font-medium w-[200px]">
                     Profile picture
                  </Label>
                  <div className="flex-1 max-w-md">
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                        <AvatarFallback className="bg-pink-500 text-white">
                           {getInitials(currentUser.name)}
                        </AvatarFallback>
                     </Avatar>
                  </div>
               </div>

               {/* Email */}
               <div className="flex items-start justify-between gap-4">
                  <Label htmlFor="email" className="text-sm font-medium w-[200px] pt-2">
                     Email
                  </Label>
                  <div className="flex-1 max-w-md">
                     {isEditingEmail ? (
                        <div className="flex items-center gap-2">
                           <Input
                              id="email"
                              type="email"
                              value={formData.email || ''}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="flex-1"
                              autoFocus
                           />
                           <Button
                              size="sm"
                              onClick={() => handleSave('email')}
                              variant="default"
                           >
                              Save
                           </Button>
                           <Button
                              size="sm"
                              onClick={() => handleCancel('email')}
                              variant="ghost"
                           >
                              Cancel
                           </Button>
                        </div>
                     ) : (
                        <div className="flex items-center gap-2">
                           <span className="text-sm flex-1">{currentUser.email}</span>
                           <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => {
                                 setIsEditingEmail(true);
                                 setFormData({ ...formData, email: currentUser.email });
                              }}
                           >
                              <Pencil className="h-3 w-3" />
                           </Button>
                        </div>
                     )}
                  </div>
               </div>

               {/* Full Name */}
               <div className="flex items-start justify-between gap-4">
                  <Label htmlFor="name" className="text-sm font-medium w-[200px] pt-2">
                     Full name
                  </Label>
                  <div className="flex-1 max-w-md">
                     {isEditingName ? (
                        <div className="flex items-center gap-2">
                           <Input
                              id="name"
                              value={formData.name || ''}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="flex-1"
                              autoFocus
                           />
                           <Button
                              size="sm"
                              onClick={() => handleSave('name')}
                              variant="default"
                           >
                              Save
                           </Button>
                           <Button
                              size="sm"
                              onClick={() => handleCancel('name')}
                              variant="ghost"
                           >
                              Cancel
                           </Button>
                        </div>
                     ) : (
                        <Input
                           id="name"
                           value={currentUser.name}
                           readOnly
                           className="flex-1"
                           onClick={() => {
                              setIsEditingName(true);
                              setFormData({ ...formData, name: currentUser.name });
                           }}
                        />
                     )}
                  </div>
               </div>

               {/* Username */}
               <div className="flex items-start justify-between gap-4">
                  <div className="w-[200px]">
                     <Label htmlFor="username" className="text-sm font-medium">
                        Username
                     </Label>
                     <p className="text-xs text-muted-foreground mt-1">
                        Nickname or first name, however you want to be called in Linear
                     </p>
                  </div>
                  <div className="flex-1 max-w-md">
                     {isEditingUsername ? (
                        <div className="flex items-center gap-2">
                           <Input
                              id="username"
                              value={formData.username || ''}
                              onChange={(e) =>
                                 setFormData({ ...formData, username: e.target.value })
                              }
                              className="flex-1"
                              autoFocus
                           />
                           <Button
                              size="sm"
                              onClick={() => handleSave('username')}
                              variant="default"
                           >
                              Save
                           </Button>
                           <Button
                              size="sm"
                              onClick={() => handleCancel('username')}
                              variant="ghost"
                           >
                              Cancel
                           </Button>
                        </div>
                     ) : (
                        <Input
                           id="username"
                           value={currentUser.username || currentUser.id}
                           readOnly
                           className="flex-1"
                           onClick={() => {
                              setIsEditingUsername(true);
                              setFormData({
                                 ...formData,
                                 username: currentUser.username || currentUser.id,
                              });
                           }}
                        />
                     )}
                  </div>
               </div>
            </div>
         </div>

         {/* Workspace Access Section */}
         <div>
            <h3 className="text-base font-semibold mb-6">Workspace access</h3>
            <div className="flex items-start justify-between gap-4">
               <div className="w-[200px]">
                  <Label className="text-sm font-medium">Delete workspace</Label>
                  <p className="text-xs text-muted-foreground mt-1">
                     Schedule workspace to be permanently deleted
                  </p>
               </div>
               <div className="flex-1 max-w-md flex justify-end">
                  <AlertDialog>
                     <AlertDialogTrigger asChild>
                        <Button variant="destructive" size="sm">
                           Delete...
                        </Button>
                     </AlertDialogTrigger>
                     <AlertDialogContent>
                        <AlertDialogHeader>
                           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                           <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete your
                              workspace and all of its data.
                           </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                           <AlertDialogCancel>Cancel</AlertDialogCancel>
                           <AlertDialogAction
                              onClick={() => {
                                 toast.error('Workspace deletion scheduled');
                              }}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                           >
                              Delete Workspace
                           </AlertDialogAction>
                        </AlertDialogFooter>
                     </AlertDialogContent>
                  </AlertDialog>
               </div>
            </div>
         </div>
      </div>
   );
}
