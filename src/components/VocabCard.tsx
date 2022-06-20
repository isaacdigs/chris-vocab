import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface VocabCardProps {
  word: string;
  meanings: {
    partOfSpeech: string;
    definition: string;
    examples: string[];
  };
  favoriteToggle: () => void;
  isFavorite: boolean;
}

export const VocabCard: React.FC<VocabCardProps> = ({ word, meanings, favoriteToggle, isFavorite }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader 
        action={
          <IconButton onClick={favoriteToggle} color={isFavorite ? "info" : "default"}>
              <StarIcon />
          </IconButton>
        }
        title={word}
        
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {meanings.partOfSpeech}<br />
          {meanings.definition}<br />
          {meanings.examples.map(example => `${example} `)}
        </Typography>
      </CardContent>
    </Card>
  )
}