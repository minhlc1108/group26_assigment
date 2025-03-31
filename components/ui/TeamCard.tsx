import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Facebook, Mail } from "lucide-react"; // Import icon
import styles from "@/styles/member.module.css";

interface TeamCardProps {
  name: string;
  imageUrl?: string;
  facebookUrl: string;
  email: string;
}

export default function TeamCard({ name, imageUrl, facebookUrl, email }: TeamCardProps) {
  return (
    <Card className={styles.card}>
      <CardHeader>
        <Avatar className={styles.avatar}>
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent>
        <CardTitle className={styles.name}>{name}</CardTitle>
        <div className={styles.contact}>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
            <Facebook size={24} className={styles.icon_facebook} />
          </a>
          <a href={`mailto:${email}`}>
            <Mail size={24} className={styles.icon_email} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
