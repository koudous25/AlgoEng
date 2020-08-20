function [m, s] = Ordre_Chaine_Matrice(P)
% ORDRE-CHAÎNE-MATRICES détermine le nombre optimal de multiplications scalaires nécessaires pour calculer le produit d’une suite de matrices
% m(i, j)  nombre minimal de multiplications scalaires nécessaires pour le calcul de la matrice Ai..j
% chaque matrice Ai est de dimension P(i-1)*P(i)

n=length(P)-1;
for i=1:n
    m(i,i)=0;
end

for l=2:n    %l longueur de la chaine
    for i=1:n-l+1
        j=i+l-1;
        m(i,j)=inf;
        for k=i:j-1
            q=m(i,k)+m(k+1,j)+ P(i)*P(k+1)*P(j+1);
            if q < m(i,j)
                m(i,j)=q;
                s(i,j)=k;
            end
        end
        
    end
end

end
