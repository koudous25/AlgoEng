function [M] = Memorisation_Chaine_Matrices(P)
n=length(P)-1;
for i=1:n
    for j=i:n
        m(i,j)=inf;
    end
end
M=Recuperer_Chaine(P,1,n);
end

