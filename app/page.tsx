"use client";

import PostCard from '@/components/shared/PostCard';
import InviteNeighbors from '@/components/features/InviteNeighbors';
import PinnedBusinesses from '@/components/features/PinnedBusinesses';
import NationwidePosts from '@/components/features/NationwidePosts';
import ValueProposition from '@/components/features/ValueProposition';
import { MOCK_POSTS } from '@/lib/data';

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Main content - Feed */}
        <div className="w-full lg:w-[60%]">
          {/* Value Proposition Section */}
          <ValueProposition />
          
          <h1 className="text-2xl font-bold mb-4">Community Feed</h1>
          
          {MOCK_POSTS.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        
        {/* Right sidebar */}
        <div className="w-full lg:w-[25%] space-y-6">
          <InviteNeighbors />
          <PinnedBusinesses />
          <NationwidePosts />
        </div>
      </div>
    </div>
  );
}