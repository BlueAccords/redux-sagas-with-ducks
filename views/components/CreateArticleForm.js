import React from 'react';


export const CreateArticleForm = ({
  onSubmit, 
}) => (
  <div>
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        />
    </form>
  </div>
)