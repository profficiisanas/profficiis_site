import { useState } from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';

const BlogPage = () => {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [expandContent, setExpandContent] = useState(false);

  const title = "L'importance cruciale de la Qualité de Service lors des Appels Téléphoniques Sortants au Nom d'une Autre Société";
  const content = `Dans le monde des affaires où les interactions humaines jouent un rôle primordial, les appels téléphoniques sortants au nom d'une autre société revêtent une importance particulière. Ces appels représentent souvent le premier contact direct entre une entreprise et un client potentiel, et leur qualité peut faire la différence entre une impression positive durable et une expérience décevante.

  Créer une Première Impression Inoubliable :

  Imaginez être du côté du destinataire de l'appel. Votre téléphone sonne, et une voix amicale se présente au nom d'une entreprise que vous n'avez peut-être jamais entendue auparavant. Cette première impression est cruciale. Elle peut déterminer si vous restez à l'écoute ou si vous raccrochez immédiatement. C'est pourquoi la qualité de l'appel est essentielle.

  Représenter la Marque avec Intégrité :

  Lorsque vous appelez au nom d'une autre société, vous devenez l'ambassadeur de cette marque. Votre langage, votre tonalité et votre professionnalisme reflètent directement l'image de l'entreprise que vous représentez. Il est donc impératif de communiquer avec intégrité, précision et respect envers les valeurs et les normes de l'entreprise.

  Écoute Active et Compréhension des Besoins :

  Une des clés de la qualité des appels sortants est l'écoute active. Comprendre les besoins, les préoccupations et les motivations du destinataire de l'appel permet de personnaliser l'interaction et de fournir des réponses pertinentes. Cela nécessite une attention particulière aux détails et une capacité à lire entre les lignes pour saisir les véritables besoins du client.

  Établir une Relation de Confiance :

  Chaque appel sortant est une opportunité de bâtir une relation de confiance avec le client potentiel. En fournissant des informations précises, en répondant aux questions avec transparence et en étant attentif aux préoccupations du client, vous renforcez la crédibilité de l'entreprise que vous représentez. Cette confiance est la base sur laquelle des relations commerciales durables peuvent être construites.

  Conclusion :

  En conclusion, la qualité des appels téléphoniques sortants au nom d'une autre société est cruciale pour établir une connexion significative avec les clients potentiels et représenter fidèlement la marque. En adoptant une approche axée sur le service, l'intégrité et la communication efficace, les professionnels des centres d'appels peuvent créer des expériences mémorables qui favorisent la fidélisation client et la croissance des affaires.`;
  const signature = "Laabi";

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput('');
    }
  };

  const toggleExpandContent = () => {
    setExpandContent(!expandContent); // Toggle expandContent between true and false
  };

  return (
    <Container maxWidth="md">
      <br /> <br />

      <Card raised sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {title}
          </Typography>
          {expandContent ? (
            <Typography variant="body1" color="text.secondary">
              {content}
            </Typography>
          ) : (
            <LinesEllipsis
              text={content}
              maxLine={5} 
              ellipsis="..."
              trimRight
              basedOn="letters"
            >
              <Typography variant="body1" color="text.secondary">
                {content}
              </Typography>
            </LinesEllipsis>
          )}
          {!expandContent ? (
            <Button onClick={toggleExpandContent} color="secondary">
                En savoir plus
            </Button>
          ) : (
            <Button onClick={toggleExpandContent} color="secondary">
              Lire moins            
            </Button>
          )}
          <Typography variant="overline" display="block" align="right">
            — {signature}
          </Typography>
        </CardContent>
      </Card>

      <Card raised>
        <CardContent>
          <Typography variant="h5" gutterBottom>
          commentaires
          </Typography>
          <Box
            component="form"
            onSubmit={handleCommentSubmit}
            noValidate
            sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField
              fullWidth
              label="Poster un commentaire"
              variant="outlined"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
            Poster un commentaire
            </Button>
          </Box>
        </CardContent>
        {comments.map((comment, index) => (
          <CardContent key={index} sx={{ mb: 2, bgcolor: 'background.paper' }}>
            <Typography>{comment}</Typography>
          </CardContent>
        ))}
      </Card>
    </Container>
  );
};

export default BlogPage;
